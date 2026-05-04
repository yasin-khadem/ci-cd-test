"""Tests for the main module."""
from main import say_hello

def test_say_hello():
    """Test that say_hello returns the expected string."""
    assert say_hello() == "Hello, World!"
