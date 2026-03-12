import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

def test_register_user():
    response = client.post("/api/v1/users/register", json={
        "email": "test@ensemble.com",
        "username": "testuser",
        "password": "motdepasse123",
        "city": "Paris"
    })
    assert response.status_code == 201
    data = response.json()
    assert data["email"] == "test@ensemble.com"
    assert data["username"] == "testuser"

def test_register_duplicate_email():
    payload = {"email": "dup@ensemble.com", "username": "user1", "password": "pass"}
    client.post("/api/v1/users/register", json=payload)
    response = client.post("/api/v1/users/register", json={**payload, "username": "user2"})
    assert response.status_code == 400

def test_login():
    client.post("/api/v1/users/register", json={
        "email": "login@ensemble.com", "username": "loginuser", "password": "secret"
    })
    response = client.post("/api/v1/users/login", data={
        "username": "login@ensemble.com", "password": "secret"
    })
    assert response.status_code == 200
    assert "access_token" in response.json()
