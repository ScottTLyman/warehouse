const packages = [
  { missing: false, heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs' },
  { missing: false, heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk' },
  { missing: false, heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147' },
  { missing: false, heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145' },
  { missing: false, heavy: true, priority: true, fragile: true, to: 'Brittany', trackingNumber: '' },
  { missing: false, heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz' },
  { missing: false, heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367' }]

let current = []

function draw() {
  let table = ''
  for (let i = 0; i < packages.length; i++) {
    const package = current[i]
    table += `
    <div class="row justify-space-between mt-2 tableRow">
    <p class="col fw-bold">${package.to}</p>
    <p class="col">${package.priority}</p>
    <p class="col">${package.fragile}</p>
    <p class="col">${package.heavy}</p>
    <p class="col">${package.trackingNumber}</p>
    </div>
  `
  }
  document.getElementById('packList').innerHTML = table
}


function missPack() {
  packages.forEach(package => package.missing = false)
  const randIndex = Math.floor(Math.random() * packages.length)
  packages[randIndex].missing = true
  current = packages
  draw()
}

function filter(filtProp) {
  let lostPackage = packages.find(package => package.missing)
  current = current.filter(package => package[filtProp] === lostPackage[filtProp])
  draw()
}

function guess(to) {
  let lostPackage = packages.find(package => package.missing)
  if (lostPackage.to == to) {
    alert('Package FOUND!')
  } else {
    alert("You couldn't find the package :(")
  }
}

missPack()