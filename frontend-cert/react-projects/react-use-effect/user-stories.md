# --description--

In this lab, you will generate a 6-digit OTP (One-Time Password) and display it to the user. The OTP will expire after 5 seconds, and a new OTP will be generated when the user clicks the `"Generate New OTP"` button.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab. 

**User Stories:**

1. Your `"Generate New OTP"` button should display a new 6-digit OTP in the `h2` element when clicked.
2. When `"Generate New OTP"` button is clicked, it should start a 5-second countdown.
3. Initially, when no OTP has been generated, the `h2` display should prompt the user to click the button with the message `"Click 'Generate OTP' to get a code"` 
4. You should display a countdown timer next to the OTP that shows how many seconds remain before the OTP expires.
5. The timer should begin at `5` seconds and count down to `0` once the OTP is generated.
6. You should display an `"OTP expired"` message when the countdown timer reaches `0`, prompting the user to generate a new OTP.
7. You should ensure the countdown timer stops automatically once it reaches `0` seconds to prevent unnecessary updates.
