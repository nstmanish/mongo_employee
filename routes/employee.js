let express = require('express');
let router = express.Router();

/** Exporting The employee Controller */
let employeeController = require('../controllers/employeeController');

/** Employee Routes */
router.post  ('/new'                , employeeController.addEmployee       );
router.get   ('/employeeList'       , employeeController.ListEmployee      );
router.get   ('/detail/:employeeId' , employeeController.viewEmployee      );
router.put   ('/update/:employeeId' , employeeController.updateEmployee    );
router.delete('/delete/:employeeId' , employeeController.deleteEmployee    );
router.get   ('/salary/:lessThan'   , employeeController.salaryItEmployee  );

module.exports = router;
