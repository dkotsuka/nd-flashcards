import { Permissions, Notifications } from 'expo'
import { AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = 'FlashCards:notifications'

export function createDeckId() {
	const id = 'deck' + (new Date()).getTime().toString(16).slice(2)
	return id
}

export function createCardId() {
	const id = 'card' + (new Date()).getTime().toString(16).slice(2)
	return id
}

export function clearLocalNotification() {
	return AsyncStorage.removeItem(NOTIFICATION_KEY)
	.then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
	return {
		title: "Daily study time",
		body: "Hey! Don`t forget to study today!",
	}
}

export function setLocalNotification() {
	AsyncStorage.getItem(NOTIFICATION_KEY)
	.then(JSON.parse)
	.then((data) => {
		if(data === null){
			Permissions.askAsync(Permissions.NOTIFICATIONS)
			.then(({status}) => {
				if (status === 'granted') {
					Notifications.cancelAllScheduledNotificationsAsync()

					const nextNotification = new Date()
					nextNotification.setDate(nextNotification.getDate() + 1)
					nextNotification.setHours(20, 0)

					Notifications.scheduleLocalNotificationAsync(
						createNotification(),
						{
							time: nextNotification,
							repeat: 'day'
						}
					)

					AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
				}
			})
		}
	})
}