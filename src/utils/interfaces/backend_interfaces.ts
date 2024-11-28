type EmploymentType = 'FULL-TIME' | 'PART-TIME';
type Gender = 'MALE' | 'FEMALE';
type AppointmentStatus = 'PENDING' | 'SCHEDULED' | 'CANCELLED' | 'COMPLETED';
type AuthType = 'none' | 'email' | 'sms'
export type WorkingDays = 'SUNDAY' | 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY';


export type Settings = {
    uid? : string
    font_size: number
    screen_reader: boolean
    on_screen_keyboard: boolean
    email_notifications: boolean
    sms_notifications: boolean
    email_reminders: boolean
    sms_reminders: boolean
    auth_type: AuthType 

}

export type log = {
    uid?: string
    action: string
    entity: string
    description: string
    timestamp: Date
}

export type User = {
    uid?: string
    username: string
    password?: string
    email: string
    firstname: string
    lastname: string
    phone_no: string
    date_of_birth?: Date
    is_verified?: boolean
    is_active?: boolean
    user_type?: string
    gender?: Gender
    created_at?: Date
    last_login?: Date
    updated_at?: Date
    settings?: Settings
    logs?: log[]

}

export type Schedule = {
    uid?: string
    staff_uid?: string
    shift_start: Date
    shift_end: Date
    day_of_week: string
    
}
export type Staff = {
    uid?: string
    user_uid: string
    employment_date: Date
    employed_until: Date
    role_uid: string
    department_uid: string
    schedules: Schedule[]
    user?: User

}

export type Doctor = {
    uid?: string
    staff_uid: string
    specializations: string
    qualifications: string
    years_of_experience: number
    enable_online_appointments : boolean
    staff?: Staff
}


export type Patient = {
    uid?: string;
    user_uid: string
    appointments?: Appointment[]

    user?: User

    

}


export type Appointment = {

    uid? : string
    start_date: Date 
    duration: number
    is_checked_in: boolean
    status: AppointmentStatus
    reason_for_visit?: string
    location: string 
    is_virtual?: boolean
    details?: string
    patient_uid: string 
    doctor_uid: string


}