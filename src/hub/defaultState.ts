

export interface ApplicationState {
    currentUser?: {
        email: string,
        profile: string,
    }
}

let defaultState: ApplicationState = {
    currentUser: null
}