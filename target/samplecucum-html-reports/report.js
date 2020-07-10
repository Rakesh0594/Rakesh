$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features1/AddCus.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "  User creating new account",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.scenario({
  "name": "Hardcoded2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Rakesh"
    },
    {
      "name": "@Rakesh"
    },
    {
      "name": "@venu"
    }
  ]
});
formatter.step({
  "name": "User launch telecom application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_launch_telecom_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_navigates_into_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters all the fields",
  "keyword": "When "
});
formatter.match({
  "location": "AddCumSteps.user_enters_all_the_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCumSteps.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "one dimensional list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.step({
  "name": "User launch telecom application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_launch_telecom_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_navigates_into_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters all the fields by using 1dim list",
  "rows": [
    {
      "cells": [
        "Rakesh",
        "venu",
        "dk@gmail.com",
        "Thiruvallur",
        "9684622544"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCumSteps.user_enters_all_the_fields_by_using_1dim_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCumSteps.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "one dimensional map",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.step({
  "name": "User launch telecom application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_launch_telecom_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_navigates_into_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters all the fields by using 1dim map",
  "rows": [
    {
      "cells": [
        "fname",
        "Rakesh"
      ]
    },
    {
      "cells": [
        "lname",
        "venu"
      ]
    },
    {
      "cells": [
        "mail",
        "dk@gmail.com"
      ]
    },
    {
      "cells": [
        "add",
        "Thiruvallur"
      ]
    },
    {
      "cells": [
        "phno",
        "9684622544"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCumSteps.user_enters_all_the_fields_by_using_1dim_map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCumSteps.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "two dimensional list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.step({
  "name": "User launch telecom application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_launch_telecom_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_navigates_into_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters all the fields by using 2dim list",
  "rows": [
    {
      "cells": [
        "Rakesh",
        "venu",
        "dk@gmail.com",
        "Thiruvallur",
        "9876543210"
      ]
    },
    {
      "cells": [
        "akash",
        "sundar",
        "akash@gmail.com",
        "Thiruvallur",
        "8765432109"
      ]
    },
    {
      "cells": [
        "ravi",
        "chandran",
        "ravi@gmail.com",
        "Thiruvallur",
        "7654321098"
      ]
    },
    {
      "cells": [
        "gopi",
        "madan",
        "gopi@gmail.com",
        "Thiruvallur",
        "6543210987"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCumSteps.user_enters_all_the_fields_by_using_2dim_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCumSteps.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "two dimensional map",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Rakesh"
    },
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.step({
  "name": "User launch telecom application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_launch_telecom_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_navigates_into_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters all the fields by using 2dim map",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "mail",
        "add",
        "phno"
      ]
    },
    {
      "cells": [
        "Rakesh",
        "venu",
        "dk@gmail.com",
        "Thiruvallur",
        "9876543210"
      ]
    },
    {
      "cells": [
        "akash",
        "sundar",
        "akash@gmail.com",
        "Thiruvallur",
        "8765432109"
      ]
    },
    {
      "cells": [
        "ravi",
        "chandran",
        "ravi@gmail.com",
        "Thiruvallur",
        "7654321098"
      ]
    },
    {
      "cells": [
        "gopi",
        "madan",
        "gopi@gmail.com",
        "Thiruvallur",
        "6543210987"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCumSteps.user_enters_all_the_fields_by_using_2dim_map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCumSteps.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "by using outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launch telecom application",
  "keyword": "Given "
});
formatter.step({
  "name": "User navigates into add customer page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters all the fields \"\u003cFname\u003e\",\"\u003cLname\u003e\",\"\u003cMail\u003e\",\"\u003cAdd\u003e\",\"\u003cPhno\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Fname",
        "Lname",
        "Mail",
        "Add",
        "Phno"
      ]
    },
    {
      "cells": [
        "Rakesh",
        "venu",
        "dk@gmail.com",
        "Thiruvallur",
        "9876543210"
      ]
    },
    {
      "cells": [
        "akash",
        "sundar",
        "akash@gmail.com",
        "Thiruvallur",
        "8765432109"
      ]
    },
    {
      "cells": [
        "ravi",
        "chandran",
        "ravi@gmail.com",
        "Thiruvallur",
        "7654321098"
      ]
    },
    {
      "cells": [
        "gopi",
        "madan",
        "gopi@gmail.com",
        "Thiruvallur",
        "6543210987"
      ]
    }
  ]
});
formatter.scenario({
  "name": "by using outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.step({
  "name": "User launch telecom application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_launch_telecom_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_navigates_into_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters all the fields \"Rakesh\",\"venu\",\"dk@gmail.com\",\"Thiruvallur\",\"9876543210\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddCumSteps.user_enters_all_the_fields(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCumSteps.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "by using outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.step({
  "name": "User launch telecom application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_launch_telecom_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_navigates_into_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters all the fields \"akash\",\"sundar\",\"akash@gmail.com\",\"Thiruvallur\",\"8765432109\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddCumSteps.user_enters_all_the_fields(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCumSteps.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "by using outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.step({
  "name": "User launch telecom application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_launch_telecom_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_navigates_into_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters all the fields \"ravi\",\"chandran\",\"ravi@gmail.com\",\"Thiruvallur\",\"7654321098\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddCumSteps.user_enters_all_the_fields(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCumSteps.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "by using outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.step({
  "name": "User launch telecom application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_launch_telecom_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into add customer page",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_navigates_into_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters all the fields \"gopi\",\"madan\",\"gopi@gmail.com\",\"Thiruvallur\",\"6543210987\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddCumSteps.user_enters_all_the_fields(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCumSteps.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be displayed customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCumSteps.user_should_be_displayed_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features1/AddTraffPlan.feature");
formatter.feature({
  "name": "Add Tariff Plan",
  "description": "  User creating new tariff plan",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Hardcoded Info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.step({
  "name": "User launch telecom application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_launch_telecom_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into tariff plan page",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_navigates_into_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills all the fields",
  "keyword": "When "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_fills_all_the_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Tariff submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_click_on_Tariff_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is displayed with the message tariff plan created",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_is_displayed_with_the_message_tariff_plan_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "using outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.step({
  "name": "User launch telecom application",
  "keyword": "Given "
});
formatter.step({
  "name": "User navigates into tariff plan page",
  "keyword": "And "
});
formatter.step({
  "name": "User fills all the fields \"\u003crental\u003e\",\"\u003clocal_minutes\u003e\",\"\u003cinter_minutes\u003e\",\"\u003csms_pack\u003e\",\"\u003cminutes_charges\u003e\",\"\u003cinter_charges\u003e\",\"\u003csms_charges\u003e\",",
  "keyword": "When "
});
formatter.step({
  "name": "User click on Tariff submit button",
  "keyword": "And "
});
formatter.step({
  "name": "User is displayed with the message tariff plan created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rental",
        "local_minutes",
        "inter_minutes",
        "sms_pack",
        "minutes_charges",
        "inter_charges",
        "sms_charges"
      ]
    },
    {
      "cells": [
        "1000",
        "5000",
        "200",
        "100",
        "2",
        "50",
        "1"
      ]
    },
    {
      "cells": [
        "900",
        "4500",
        "300",
        "200",
        "3",
        "40",
        "2"
      ]
    },
    {
      "cells": [
        "800",
        "4000",
        "400",
        "300",
        "4",
        "30",
        "3"
      ]
    },
    {
      "cells": [
        "700",
        "3500",
        "500",
        "400",
        "5",
        "20",
        "4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "using outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.step({
  "name": "User launch telecom application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_launch_telecom_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into tariff plan page",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_navigates_into_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills all the fields \"1000\",\"5000\",\"200\",\"100\",\"2\",\"50\",\"1\",",
  "keyword": "When "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_fills_all_the_fields(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Tariff submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_click_on_Tariff_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is displayed with the message tariff plan created",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_is_displayed_with_the_message_tariff_plan_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "using outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.step({
  "name": "User launch telecom application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_launch_telecom_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into tariff plan page",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_navigates_into_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills all the fields \"900\",\"4500\",\"300\",\"200\",\"3\",\"40\",\"2\",",
  "keyword": "When "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_fills_all_the_fields(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Tariff submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_click_on_Tariff_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is displayed with the message tariff plan created",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_is_displayed_with_the_message_tariff_plan_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "using outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.step({
  "name": "User launch telecom application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_launch_telecom_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into tariff plan page",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_navigates_into_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills all the fields \"800\",\"4000\",\"400\",\"300\",\"4\",\"30\",\"3\",",
  "keyword": "When "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_fills_all_the_fields(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Tariff submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_click_on_Tariff_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is displayed with the message tariff plan created",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_is_displayed_with_the_message_tariff_plan_created()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "using outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Rakesh"
    }
  ]
});
formatter.step({
  "name": "User launch telecom application",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_launch_telecom_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates into tariff plan page",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_navigates_into_tariff_plan_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User fills all the fields \"700\",\"3500\",\"500\",\"400\",\"5\",\"20\",\"4\",",
  "keyword": "When "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_fills_all_the_fields(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Tariff submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_click_on_Tariff_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is displayed with the message tariff plan created",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTrafficPlanStep.user_is_displayed_with_the_message_tariff_plan_created()"
});
formatter.result({
  "status": "passed"
});
});