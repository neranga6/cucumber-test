$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sample.feature");
formatter.feature({
  "line": 1,
  "name": "Get book by ISBN",
  "description": "",
  "id": "get-book-by-isbn",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "User calls web service",
  "description": "",
  "id": "get-book-by-isbn;user-calls-web-service",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "test_given",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "test_when",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "test_then",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.test_given()"
});
formatter.result({
  "duration": 158869248,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat StepDefinition.test_given(StepDefinition.java:29)\r\n\tat ✽.Given test_given(sample.feature:3)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "StepDefinition.test_when()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.test_then()"
});
formatter.result({
  "status": "skipped"
});
});