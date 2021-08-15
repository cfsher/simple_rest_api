let supervisors = [
  {
    name: 'brian smith',
    role: 'hr manager',
    id: '1',
  },
  {
    name: 'coffee boy',
    role: 'coffee boy',
    id: '2',
  },
  {
    name: 'garfield',
    role: 'eat lasagna',
    id: '3',
  },
  {
    name: 'jimmy pillar',
    role: 'director',
    id: '4'
  }
];

let notification = {
  hired: {
    message: 'you are hired!',
    urgency: 1
  },
  fired: {
    message: 'you are fired!',
    urgency: 1
  }
};

exports.supervisors = supervisors;
exports.notification = notification;
