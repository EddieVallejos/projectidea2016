//PANG TESTING LANG TO

'use strict'
const request = require('request')

const applicant1 = {
  'code': '12345A',
  'studno': '2014-12775',
  'username': 'leearianne',
  'password': '12346',
  'surname': 'Taglinao',
  'givenname': 'Lee Arianne',
  'middlename': 'Perlado',
  'suffix': null,
  'emailadd': 'lptaglinao@up.edu.ph',
  'contactnum': '09175313568',
  'degreeprog': 'BSCS',
  'adviser': null,
  'year': 'Sophomore',
  'gwa': 2.0,
  'prefproglang': 'C',
  'essay1': 'aaaaaa',
  'essay2': 'bbbbbb',
  'sched': 'ccccc',
  'progress': 'Finals'
}

const progress = {
  'progress' : 'Orientation',
  'studno': '2014-12775'
}

const applicant2 = {
  'username': 'leearianne',
  'studno': '2014-12775',
  'password': '12347',
}

const account1 = {
  'code': '12345A',
  'studno': '2014-12775',
  'username': 'leearianne',
  'password': '12346'
}

request.put(
   'http://localhost:8000/api/update-profile',
   { json: applicant1 },
  (err, res, body) => {
    if (!err) {
      console.log(body)
    } else {
      console.log(err)
    }
})
