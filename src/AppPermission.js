import { check, request,PERMISSIONS , RESULTS, requestMultiple} from 'react-native-permissions';
import {Platform} from 'react-native';

const PLATFORM_MICROPHONE_PERMISSIONS = {
    ios: PERMISSIONS.IOS.MICROPHONE,
    android: PERMISSIONS.ANDROID.RECORD_AUDIO
}

const PLATFORM_PHOTO_PERMISSIONS = {
    ios: PERMISSIONS.IOS.PHOTO,
    android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
}

const PLATFORM_SEND_SMS_PERMISSIONS = {
    ios: null,
    android: PERMISSIONS.ANDROID.SEND_SMS
}

const PLATFORM_READ_CALENDAR_PERMISSIONS = {
    ios:PERMISSIONS.IOS.CALENDARS,
    android: PERMISSIONS.ANDROID.READ_CALENDAR
}

const PLATFORM_CAMERA_PERMISSIONS = {
    ios:PERMISSIONS.IOS.CAMERA,
    android: PERMISSIONS.ANDROID.CAMERA
}

const PLATFORM_LOCATION_PERMISSIONS = {
    ios:PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    android: PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION
}

const PLATFORM_CONTACT_PERMISSIONS = {
    ios: PERMISSIONS.IOS.CONTACTS,
    android: PERMISSIONS.ANDROID.READ_CONTACTS
}

const PLATFORM_CALL_PERMISSIONS = {
    ios: null,
    android: PERMISSIONS.ANDROID.CALL_PHONE
}


const REQUEST_PERMISSION_TYPE = {
    microphone: PLATFORM_MICROPHONE_PERMISSIONS,
    photo: PLATFORM_PHOTO_PERMISSIONS,
    send_sms: PLATFORM_SEND_SMS_PERMISSIONS,
    read_calendar: PLATFORM_READ_CALENDAR_PERMISSIONS,
    camera: PLATFORM_CAMERA_PERMISSIONS,
    location: PLATFORM_LOCATION_PERMISSIONS,
    contact: PLATFORM_CONTACT_PERMISSIONS,
    call: PLATFORM_CALL_PERMISSIONS
}

const PERMISSION_TYPE = {
    microphone: 'microphone',
    photo: 'photo',
    send_sms: 'send_sms',
    read_calendar: 'read_calendar',
    camera: 'camera',
    location:'location',
    contact: 'contact',
    call: 'call',
}

class AppPermission {

    checkPermission = async (type): Promise<boolean> => {
        console.log("AppPermission checkPermission  type:", type)
        const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS]
        console.log("AppPermission checkPermission  permissions:", permissions)
        if (!permissions) {
            return true
        }
        try {
            const result = await check(permissions)
            console.log("AppPermission checkPermission  result:", result)
            if (result === RESULTS.GRANTED) return true
            return this.requestPermission(permissions)
        } catch (error) {
            console.log("AppPermission checkPermission  error:", error)
            return false
        }
     }
     requestPermission = async (permissions): Promise<boolean> => {
        console.log("AppPermission requestPermission  permissions:", permissions)
         try {
             const result = await request(permissions)
             console.log("AppPermission requestPermission  result:", result)
             return result === RESULTS.GRANTED
         } catch (error) {
            console.log("AppPermission requestPermission  error:", error)
             return false
         }
     }



  /*  requestMultiple = async (types): Promise<boolean> => {
              console.log("AppPermission requestMultiple types:", types)
              const results =[]
              for (const type of types) {
                const permission = REQUEST_PERMISSION_TYPE[type][Platform.OS]
                if (permission) {
                    const result = await this.requestPermission(permission)
                    results.push(result)
                }
            }
            for (const result of results) {
                if (!result) {
                    return false
                }
            }
    return true
        }
    }
*/
}
       
        
const Permission = new AppPermission ()
export {Permission,PERMISSION_TYPE}
