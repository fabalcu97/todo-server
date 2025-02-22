# Builder stage
FROM python:3.11-slim AS builder

RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential curl

# Install uv
COPY --from=ghcr.io/astral-sh/uv:0.6.2 /uv /uvx /bin/

# Set environment variables
ENV PYTHONUNBUFFERED=1 \
    UV_SYSTEM_PYTHON=1 \
    UV_LINK_MODE=copy \
    UV_COMPILE_BYTECODE=1

# Set work directory
WORKDIR /app

# Install dependencies
RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    uv sync --frozen --no-install-project --no-editable

# Copy the project into the image
ADD . /app

# Sync the project
RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --frozen --no-editable

# Final stage
FROM python:3.11-slim AS final

# Install uv
COPY --from=ghcr.io/astral-sh/uv:0.6.2 /uv /uvx /bin/

# Set work directory
WORKDIR /app

# Copy virtual environment from builder
COPY --from=builder /app/.venv /app/.venv

# Copy project files
COPY . /app/

# Expose port
EXPOSE 8000

# Run Django application
CMD ["uv", "run", "gunicorn", "--bind", "0.0.0.0:8000", "todo.wsgi:application"]
