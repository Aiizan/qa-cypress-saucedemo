##  Test Case: Successful Login

-**ID:** TC001
-**Title:** Valid login with standard user
-**Steps:**
    1. visit (https://www.saucedemo.com/)
    2. Go to login page
    3. Enter username: standar_user
    4. Enter password: secret_sauce
    5. Click login button
-**Expected Result:** User is redirected to inventory page
-**Actual Result:** User is redirected to inventory page
-**Status:** Pass


## Test Case: Incorrect username and password

-**ID:** TC002
-**Title:** Validate that the user is not logged in with an incorrect username and password
-**Steps:**
     1. visit (https://www.saucedemo.com/)
     2. Go to login page
     3. Enter username: gaga_01
     4. Enter password: secret_pass
     5. Click login button
-**Expected Result:** User not is redirected to inventory page and devolved message error: "Epic sadface: Username and password do not match any user in this service"
-**Actual Result:** Epic sadface: Username and password do not match any user in this service
-**Status:** Pass
