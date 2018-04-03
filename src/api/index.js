const data = require('./mock-data')
const _campaigns = data.campaigns

export function getAllCampaigns (cb) {
  setTimeout(() => cb(_campaigns), 100)
}
