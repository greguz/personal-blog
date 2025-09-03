const things = [
  "RG93bmxvYWRpbmcgZmFydHMuLi4=",
  "TE9M",
  "SW5zdGFsbGluZyBEcmVhbUJlcmQgaW5zdGFsbGVyIGluc3RhbGxlci4uLg==",
  "U2VuZGluZyBjb25maXJtYXRpb24gdG8gZXh0ZW5kIGNhciB3YXJyYW50eS4uLg==",
  "TWFraW5nIGlQaG9uZXMgd2F0ZXJwcm9vZi4uLg==",
  "U3Vic2NyaWJpbmcgdG8gQS1Eb2gtQmVlLi4u",
  "VXNpbmcgUnVzdCBGb3VuZGF0aW9uIHRyYWRlbWFyay4uLg==",
  "QnJlYWtpbmcgdXNlcnNwYWNlIGluc2lkZSBMaW51eCBrZXJuZWwuLi4=",
  "VXNpbmcgbWFzdGVyIGJyYW5jaCBpbnN0ZWFkIG9mIG1haW4uLi4=",
]

let timer = null

const callback = () => {
  if (!things.length) {
    clearInterval(timer)
    console.log("Thank you for your cooperation! Have a nice day.")
    return
  }

  const [text] = things.splice(
    Math.floor(Math.random() * things.length),
    1,
  )
  console.log(atob(text))
}

console.log("Hacking in progress...")
timer = setInterval(callback, 4000)
