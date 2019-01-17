# API Timestamp project

1. API endpoint: GET https://useful-punishment.glitch.me/api/timestamp/:date_string?
2. If :data_string? is valid the api returns JSON with both UNIX and UTC date forms.
3. If :data_string? is empty the api returns current date and time (GMT)
4. If :data_string? is invalid the api returns {error: "Invalid Date"}

### Example

[https://useful-punishment.glitch.me/api/timestamp/2019-12-25]

[https://useful-punishment.glitch.me/api/timestamp/1577232000000]
