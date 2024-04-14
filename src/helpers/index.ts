// dependencies
import { string } from "fast-web-kit"

// application name
export const applicationName: string = "Tazama Africa Tours and Safaris"

// page title changing
export const setPageTitle = (title: string): void => { document.title = `${string.capitalize(title)} | ${applicationName}` }

// emailjs credentials
export const emailJSServiceId: string = "tazama"
export const emailJSPublicKey: string = "wESJ2aNbImTBIUuey"
export const emailJSTemplateId: string = "template_qw0q2ux"