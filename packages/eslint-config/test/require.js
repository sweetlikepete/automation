

import tape from "tape";


tape("all entry points parse", (test) => {

    test.doesNotThrow(() => require("../lib"), "index does not throw");

    test.end();

});
