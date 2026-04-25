FROM python:3.12
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
#CMD ["gunicorn", "portfoliosite.wsgi:application", "--bind", "0.0.0.0:8000"]

#CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]

CMD ["gunicorn", "portfoliosite.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3"]
