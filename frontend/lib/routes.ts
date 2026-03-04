export const HOME_PAGE_URL = "/home"
export const TOP_OFFICES_URL = "/top-offices"
export const REGISTER_PAGE_URL = "/auth/register"
export const LOGIN_PAGE_URL = "/auth/login"

export const DIRECTORY_PORTAL_URL = "/portals/directory-portal"
export const DIRECTORY_PORTAL_DASHBOARD = (id: string) => `${DIRECTORY_PORTAL_URL}/${id}/dashboard`
export const DIRECTORY_PORTAL_OFFICES = (id: string) => `${DIRECTORY_PORTAL_URL}/${id}/offices`
export const DIRECTORY_PORTAL_ADD_OFFICE = (id: string, officeId: string) => `${DIRECTORY_PORTAL_URL}/${id}/offices/add-new-office/${officeId}`
export const DIRECTORY_PORTAL_OFFICE_REQUEST = (id: string) => `${DIRECTORY_PORTAL_URL}/${id}/office-request`
export const DIRECTORY_PORTAL_REVIEWS = (id: string) => `${DIRECTORY_PORTAL_URL}/${id}/reviews`
export const DIRECTORY_PORTAL_VIDEO_MANAGER = (id: string) => `${DIRECTORY_PORTAL_URL}/${id}/video-manager`