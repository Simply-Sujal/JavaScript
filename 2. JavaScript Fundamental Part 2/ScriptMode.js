
'use strict';
// why do we use strict code 
// It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).
// It disables features that are confusing or poorly thought out.
// Strict mode makes it easier to write “secure” JavaScript.

let eligibleForVote = false;
const passTest = true;

if(passTest) eligibleForVote = true;
if(eligibleForVote) console.log("Hey this is Sujal here!");
// else console.log("I am cool");
