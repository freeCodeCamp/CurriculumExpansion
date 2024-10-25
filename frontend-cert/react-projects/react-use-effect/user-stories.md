Your `"Generate New OTP"` button should display a new 6-digit OTP in the `h2` element when clicked.

When `"Generate New OTP"` button is clicked, it should start a 5-second countdown.

Initially, when no OTP has been generated, the `h2` display should prompt the user to click the button with the message `"Click 'Generate OTP' to get a code"`

You should display a countdown timer next to the OTP that shows how many seconds remain before the OTP expires.
The timer should begin at `5` seconds and count down to `0` once the OTP is generated.

You should display an `"OTP expired"` message when the countdown timer reaches `0`, prompting the user to generate a new OTP.

You should ensure the countdown timer stops automatically once it reaches `0` seconds to prevent unnecessary updates.
