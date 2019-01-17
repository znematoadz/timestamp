# API Timestamp project

1. API endpoint: GET https://znematoadz.github.io/timestamp/api/:date_string?
2. If :data_string? is valid the api returns JSON with both UNIX and UTC date forms.
3. If :data_string? is empty the api returns current date and time (GMT)
4. If :data_string? is invalid the api returns {error: "Invalid Date"}

### Example

[https://znematoadz.github.io/timestamp/api/2019-12-25]

[https://znematoadz.github.io/timestamp/api/1577232000000]
