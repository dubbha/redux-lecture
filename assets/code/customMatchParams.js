<Route path="/user/:username" component={User}/>

const User = ({ match }) => <h1>Hello {match.params.username}!</h1>;

// regexp matches supported
/optional/:param?               // /optional, /optional/foo
/optional/:param*               //  /optional, /optional/foo/, optional/foo/bar
/optional/:param+               //  /optional/foo/, optional/foo/bar
/number/(\d+)                   //  /number/1, 123, 12345
/number/(\d{1,3})               //  /number/123
/phone/(\d{3})-(\d{3})-(\d{4})	//  /phone/067-123-4567
/date/:iso(\d{4}-\d{2}-\d{2})   //  /date/2018-12-31, ISO 8601 format date
/time/:hh(\d{2})::mm(\d{2})     //  /time/10:45
/:key/:value(\d+)               //  /iq/80, /weight/150