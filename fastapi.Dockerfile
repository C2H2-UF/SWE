FROM python:3.10
WORKDIR /code
COPY ./backend/requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
COPY ./backend/main.py /code/main.py
COPY ./backend/algorithm.py /code/algorithm.py
COPY ./backend/models.py /code/models.py
# remove reload on production
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]