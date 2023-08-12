const checkAddress = (address) => {
    const walletPattern = /^(0x)?[A-Fa-f0-9]{39,42}$/
    let isValid = walletPattern.test(address)
    if(isValid) {
      return true
    } else {
      return false
    }
  }

module.exports = checkAddress