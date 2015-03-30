casper.options.waitTimeout = 20000	

casper.test.begin('Salesforce Login Page', 5, function suite(test) {
 
	casper.start('http://test.salesforce.com/', function() {		
		this.viewport(1680, 1050)
	});
	
	casper.waitForResource("logo190.png", function() {
	    //this.echo('logo190.png has been loaded');
	    this.capture("login.jpg")
	});	
	
	casper.then (function() {
		test.assertTitle('salesforce.com - Customer Secure Login Page', 'has the correct title');		
		test.assertExists('#username', 'has the element username for input');
		test.assertExists('#password', 'has the element password for input');
		test.assertExists('#Login', 'has the element Login button');		
	});

	casper.then(function(){		
		this.sendKeys('#username', 'dchandrasekaran@netjetsus.com.gcmqa');
		this.sendKeys('#password', '');
		this.capture("login_form_completed.jpg")
		this.click('#Login')
	});

	casper.waitForResource("2015_spring.png", function() {
	    //this.echo('2015_spring.png has been loaded');
	    this.capture("home.jpg")
	});

	casper.then(function(){
		test.assertExists('#tabContainer', 'has the tab bar');
	});

	casper.run(function() {
        test.done();
	});
});

