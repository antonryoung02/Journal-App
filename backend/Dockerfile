# Use an official Python runtime as a parent image
FROM python:3.11

# Install Poetry
RUN curl -sSL https://install.python-poetry.org | python3 -

# Set work directory
WORKDIR /app

# Copy pyproject.toml and poetry.lock (if available)
COPY pyproject.toml poetry.lock* /app/

# Install dependencies using Poetry
# Use the full path to the Poetry executable
RUN /root/.local/bin/poetry config virtualenvs.create false
RUN /root/.local/bin/poetry install --no-dev

# Copy project
COPY . /app/