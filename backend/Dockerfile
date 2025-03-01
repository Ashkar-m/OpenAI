# Use official Python image
FROM python:3.10

# Set the working directory
WORKDIR /app

# Copy the backend code
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port
EXPOSE 8000

# Run the Django/DRF application
CMD ["gunicorn", "-b", "0.0.0.0:8000", "backend.wsgi:application"]
