module.exports = [
  {
    name: 'mock server',
    type: 'list',
    message: 'Select mock server',
    choices: [
      { name: 'NEI', value: 'nei' },
      { name: 'RAP', value: 'rap' }
    ],
    default: 'nei'
  },
  {
    name: 'adaptation',
    type: 'list',
    message: 'Select adaptation',
    choices: [
      { name: 'rem', value: 'rem' },
      { name: 'vm', value: 'vm' }
    ],
    default: 'rem'
  },
  {
    name: 'statistical platform',
    type: 'list',
    message: 'Select statistical platform',
    choices: [
      { name: 'none', value: 'none' },
      { name: 'Zhuge (诸葛io)', value: 'zhuge' },
      { name: 'Umeng (友盟)', value: 'umeng' },
      { name: 'Baidu (百度统计)', value: 'baidu' }
    ],
    default: 'none'
  }
]