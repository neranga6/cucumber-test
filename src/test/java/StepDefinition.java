import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.equalTo;

import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.equalTo;

import java.util.Arrays;

import org.apache.http.HttpStatus;
import org.junit.Test;

import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
public class StepDefinition {


    @Given("^test_given$")
    public void test_given() throws Throwable {    // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^test_when$")
    public void test_when() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
    @Then("^test_then$")
    public void test_then() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }


}



