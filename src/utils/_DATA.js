let users = {
  sarahedo: {
    id: 'sarahedo',
    avatarURL: 'https://tylermcginnis.com/would-you-rather/sarah.jpg',
    nickname: 'Sarah Edo',
    dob: '11/12/1988',
    sex: 'female',
    status: 'offline',
    chatWith: ''
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    avatarURL: 'https://tylermcginnis.com/would-you-rather/tyler.jpg',
    nickname: 'Tyler McGinnis',
    dob: '4/7/1990',
    sex: 'male',
    status: 'busy',
    chatWith: ''
  },
  johndoe: {
    id: 'johndoe',
    avatarURL: 'https://tylermcginnis.com/would-you-rather/dan.jpg',
    nickname: 'Tyler McGinnis',
    dob: '8/11/1988',
    sex: 'male',
    status: 'online',
    chatWith: ''
  }
}

let messages = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    senderId: 'sarahedo',
    receiverId: 'tylermcginnis',
    timestamp: '',
    text:'Hello :D'
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    senderId: 'sarahedo',
    receiverId: 'tylermcginnis',
    timestamp: '',
    text:'How are you recently?'
  },
  'am8ehyc8byjqgar0jgpub9': {
    id: 'am8ehyc8byjqgar0jgpub9',
    senderId: 'tylermcginnis',
    receiverId: 'sarahedo',
    timestamp: '',
    text:'Hey there Sarah'
  },
  'loxhs1bqm25b708cmbf3g': {
    id: 'loxhs1bqm25b708cmbf3g',
    senderId: 'tylermcginnis',
    receiverId: 'sarahedo',
    timestamp: '',
    text:'Doing not bad. Taking my girl friend out tonight!'
  }
}

function generateID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

function formatUser({ username}) {
  return {
    id: username,
    avatarURL: '',
    nickname: '',
    dob: '',
    gender: '',
    status: '',
    chatWith: ''
  }
}

export function _saveUser(user) {
  return new Promise( (res, rej) => {
    const formattedUser = formatUser(user)

    setTimeout(() => {
      users = {
        ...users,
        [formattedUser.id]: formattedUser
      }

      res(formattedUser)
    }, 1000)
    })
}

export function _startChatting({loggedUser, otherUser}) {
  return new Promise( (res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [loggedUser] : {
          ...users[loggedUser],
          status: 'busy',
          chatWith: otherUser
        },
        [otherUser] : {
          ...users[otherUser],
          status: 'busy',
          chatWith: loggedUser
        }
      }

      res(users)
    }, 500)
  })
}

export function _stopChatting({loggedUser, otherUser}) {
  return new Promise( (res, rej) => {
    setTimeout(() =>{
      users = {
        ...users,
        [loggedUser]: {
          ...users[loggedUser],
          status: 'online',
          chatWith: ''
        },
        [otherUser]: {
          ...users[otherUser],
          status: 'online',
          chatWith: ''
        }
      }
      
      res(users)
    }, 500)
  })
}

export function _updateUserInfo({user, nickname, dob, gender}) {
  return new Promise( (res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [user] : {
          ...users[user],
          nickname: nickname,
          dob: dob,
          gender: gender
        }
      }

      res(users[user])
    }, 500)
  })
}

export function _getMessages () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...messages}), 1000)
  })
}

function formatMessage ({senderId, receiverId, text}) {
  return {
    id: generateID(),
    timestamp: Date.now(),
    senderId,
    receiverId,
    text
  }
}

export function _setStatus( {loggedUser, status}) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [loggedUser] : {
          ...users[loggedUser],
          status: status
        }
      }
      res()
    }, 500)
  })
}

export function _saveMessage (message) {
  return new Promise((res, rej) => {
    const loggedUser = message.senderId
    const formattedMessage = formatMessage(message)

    setTimeout(() => {
      messages = {
        ...messages,
        [formattedMessage.id]: formattedMessage
      }

      res(formattedMessage)
    }, 10000)
  })
}