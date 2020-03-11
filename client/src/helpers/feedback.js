import StoreHelper from './store-helper'
import axios from 'axios'

export function   postFeedback (feedback) {
  if(!feedback || feedback.length <= 0) {
    return Promise.resolve()
  }
  const apiUrl = StoreHelper.apiUrl()
  const base = apiUrl + '/feedback/'
  return axios.post(base, { feedbackData: feedback})
}

export async function getFeedbackData () {
  const apiUrl = StoreHelper.apiUrl()
  const base = apiUrl + '/feedback/'
  const res = await axios.get(base)
  const { feedbacks } = res.data
  return feedbacks
}