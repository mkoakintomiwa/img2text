declare var fs: typeof import("fs");

declare var path: typeof import("path");

declare var childProcess: typeof import("child_process");

declare var documentRoot: string;

declare var relDirname: string;

declare var portalUrl: string;

declare var organizationLogo: string;

declare var ajax: string;

declare var api: string;

declare var user: User;

declare var themeColor: string;

declare var websockets: string;

declare var serverHost: ServerHost;

declare var initNewMessages: number;

declare var initNewNotifications: number;

declare var su: User | false;

declare var suRedirectLink: string;

declare var topbar: TopBar;

interface TopBar{
    
    hide()

    show()

    config(options: any);

    progress(progress: string)
}

type ServerHost = {
    ip?: string,
    hostname?: string;
}


type User = {
    uid: number,
    username: string,
    password: string,
    name: string,
    clearance: string,
    admin_priviledge: boolean,
    admin_priviledges: AdminProperties,
    admission_number: string,
    dp: string,
    branch: string,
    phone_number: string,
    email: string,
    tid: number,
    is_online: boolean,
    is_student: boolean;
}


type AdminProperties = {
    register_a_new_student: boolean,
    view_students_profile: boolean,
    register_a_new_teacher: boolean,
    view_teachers_profile:boolean,
    register_a_new_community_member: boolean,
    send_bulk_notifications: boolean,
    set_department: boolean,
    add_remove_admin_priviledged: boolean,
    add_lesson_note_supervisors: boolean,
    unenroll_student: boolean,
    reenroll_student: boolean,
    remove_student: boolean,
    remove_teacher: boolean,
    remove_community_member: boolean,
    set_recordings_deadline: boolean,
    edit_results_after_deadline: boolean,
    update_settings: boolean,
    edit_result: boolean,
    make_direct_payment: boolean,
    control_bursary: boolean,
    nullify_direct_payment: boolean,
    view_finance_reports: boolean,
    view_and_reset_password: boolean,
    view_accounts: boolean,
    edit_teacher_comments: boolean,
    edit_youth_organizations: boolean
}

