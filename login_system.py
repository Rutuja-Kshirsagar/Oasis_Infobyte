# LEVEL 2 - TASK 4

import os
import time
2
# Define the user data file
USER_DATA_FILE = "users.txt"

# Function to register a new user
def register_user():
    print("---- Registration ----")
    username = input("Enter username: ")
    password = input("Enter password: ")

    # Check if the username already exists
    if check_user_exists(username):
        print("Username already exists. Please choose a different username.")
        return

    # Save the user credentials to the file
    with open(USER_DATA_FILE, "a") as f:
        f.write(f"{username},{password}\n")
    print("Registration successful! You can now log in.")

# Function to check if a user exists
def check_user_exists(username):
    if os.path.exists(USER_DATA_FILE):
        with open(USER_DATA_FILE, "r") as f:
            users = f.readlines()
            for user in users:
                stored_username, _ = user.strip().split(",")
                if stored_username == username:
                    return True
    return False

# Function to authenticate a user
def authenticate_user():
    print("---- Login ----")
    username = input("Enter username: ")
    password = input("Enter password: ")

    # Check if the user credentials match
    if os.path.exists(USER_DATA_FILE):
        with open(USER_DATA_FILE, "r") as f:
            users = f.readlines()
            for user in users:
                stored_username, stored_password = user.strip().split(",")
                if stored_username == username and stored_password == password:
                    return True
    return False

# Function to display a secured page
def secured_page():
    print("\n---- Secured Page ----")
    print("Welcome to the secured page! You are logged in successfully.")

# Main program
def main():
    # Ensure the users file exists
    if not os.path.exists(USER_DATA_FILE):
        with open(USER_DATA_FILE, "w") as f:
            pass  # Create an empty file if it doesn't exist

    while True:
        print("\n1. Register")
        print("2. Login")
        print("3. Exit")
        choice = input("Choose an option: ")

        if choice == "1":
            register_user()
        elif choice == "2":
            if authenticate_user():
                print("Login successful!")
                secured_page()
                break
            else:
                print("Invalid username or password. Please try again.")
        elif choice == "3":
            print("Exiting... Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
