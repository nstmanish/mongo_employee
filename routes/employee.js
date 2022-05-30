let express = require('express');
let router = express.Router();

/** Exporting The employee Controller */
let employeeController = require('../Controllers/employeeController');

/** Employee Routes */
router.post  ('/new'                , employeeController.add_employee       );
router.get   ('/employeeList'       , employeeController.List_employee      );
router.get   ('/detail/:employeeId' , employeeController.view_employee      );
router.put   ('/update/:employeeId' , employeeController.update_employee    );
router.delete('/delete/:employeeId' , employeeController.delete_employee    );
router.get   ('/salary/:lessThan'   , employeeController.salary_lt_employee );

module.exports = router;
