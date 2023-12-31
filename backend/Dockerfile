# Use an official Python runtime as a base image
FROM python:3.11

# Set the working directory in the container
WORKDIR /usr/src/app

# Install Poetry
RUN pip install poetry

# Copy the Poetry configuration files (pyproject.toml and optionally poetry.lock) into the container
COPY pyproject.toml poetry.lock* /usr/src/app/

# Configure Poetry:
# - Do not create a virtual environment inside the container as the container itself provides isolation
# - Install only package dependencies without the packages listed in [tool.poetry.dev-dependencies]
RUN poetry config virtualenvs.create false \
  && poetry install --no-dev --no-interaction --no-ansi

# Copy the rest of your application's code into the container
COPY . /usr/src/app

# Expose the port the app runs on
EXPOSE 8000

# Define the command to run your application
# Note: Use `poetry run` to run commands within the context of Poetry's environment
CMD ["poetry", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
