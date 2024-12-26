import ApiConstants from '../adapter/ApiConstants';
import ApiOperation from '../adapter/ApiOperation';

export const factories = {
    getAdminListAccommodation: (params) => {
        return ApiOperation.request({
            url: ApiConstants.ACCOMMODATIONS + '/admin',
            method: 'GET',
            params: params,
        });
    },
    getStaticsMonth: (data) => {
        return ApiOperation.request({
            url: ApiConstants.STATICS + '/booking-summary',
            method: 'GET',
            params: data,
        });
    },
    getStaticsYearRevenue: (params) => {
        return ApiOperation.request({
            url: ApiConstants.STATICS + '/year/revenue',
            method: 'GET',
            params,
        });
    },
    getStaticsYearTicket: (params) => {
        return ApiOperation.request({
            url: ApiConstants.STATICS + '/year/ticket',
            method: 'GET',
            params
        });
    },
    getStaticsYearTopHost: (params) => {
        return ApiOperation.request({
            url: ApiConstants.STATICS + '/top-host-owners',
            method: 'GET',
            params
        });
    },
    updatePinReview: (id, value) => {
        return ApiOperation.request({
            url: ApiConstants.TICKET + '/update-show/' + id,
            method: 'PATCH',
            data: {
                isShow: value,
            },
        });
    },
    getReviews: (params) => {
        return ApiOperation.request({
            url: ApiConstants.TICKET + '/reviews',
            method: 'GET',
            params,
        });
    },
    createReview: (data) => {
        return ApiOperation.request({
            url: ApiConstants.REVIEW + '/' + data.id,
            method: 'POST',
            data: data,
        });
    },
    updatePayment: (data) => {
        return ApiOperation.request({
            url: ApiConstants.PAYMENT,
            method: 'PUT',
            data,
        });
    },
    cancelTicket: (id) => {
        return ApiOperation.request({
            url: ApiConstants.TICKET + '/' + id,
            method: 'PUT',
            data: {
                status: 2
            }
        });
    },
    createPayment: (data) => {
        return ApiOperation.request({
            url: ApiConstants.PAYMENT + '/create_payment_url',
            method: 'POST',
            data: data,
        });
    },
    createTicket: (data) => {
        return ApiOperation.request({
            url: ApiConstants.TICKETS,
            method: 'POST',
            data: data,
        });
    },
    getWalletInfo: (id) => {
        return ApiOperation.request({
            url: ApiConstants.PAYMENT + '/user/' + id,
            method: 'GET',
        });
    },
    getListTicket: (params) => {
        return ApiOperation.request({
            url: ApiConstants.TICKET,
            method: 'GET',
            params: params
        });
    },
    getTicket: (id) => {
        return ApiOperation.request({
            url: ApiConstants.TICKET + '/detail/' + id,
            method: 'GET',
        });
    },
    getAdminListRoom: (params) => {
        return ApiOperation.request({
            url: ApiConstants.ACCOMMODATIONS + '/rooms/admin',
            method: 'GET',
            params: params,
        });
    },
    createNewAccommodation: (data) => {
        return ApiOperation.request({
            url: ApiConstants.ACCOMMODATIONS,
            method: 'POST',
            data: data,
        });
    },
    createNewRoom: (data) => {
        return ApiOperation.request({
            url: ApiConstants.ACCOMMODATIONS + '/' + data.id + '/rooms',
            method: 'POST',
            data: data,
        });
    },
    updateStatusRequest: (id, value) => {
        return ApiOperation.request({
            url: ApiConstants.REQUESTS + '/' + id,
            method: 'PATCH',
            data: {
                isApprove: value === 1,
            },
        });
    },
    getListUser: (params) => {
        return ApiOperation.request({
            url: ApiConstants.USERS,
            method: 'GET',
            params,
        });
    },
    getRequestHost: () => {
        return ApiOperation.request({
            url: ApiConstants.REQUESTS,
            method: 'GET',
        });
    },
    getUserInfo: id => {
        return ApiOperation.request({
            url: ApiConstants.USERS + '/' + id,
            method: 'GET',
        })
    },
    updateUserInfo: (id, data) => {
        return ApiOperation.request({
            url: ApiConstants.USERS + '/' + id,
            method: 'PATCH',
            data: data,
        });
    },
    getLoginEmail: (email, pass) => {
        return ApiOperation.request({
            url: ApiConstants.AUTH + '/login',
            method: 'POST',
            data: {
                email: email,
                password: pass,
            },
        });
    },
    getSignUpEmail: (metadata) => {
        return ApiOperation.request({
            url: ApiConstants.AUTH + '/sign-up',
            method: 'POST',
            data: metadata,
        });
    },
    updatePassword: (data) => {
        return ApiOperation.request({
            url: ApiConstants.AUTH + '/change-password',
            method: 'POST',
            data,
        });
    },
    ///

    getAccommodations: data => {
        return ApiOperation.request({
            url: ApiConstants.ACCOMMODATIONS,
            method: 'GET',
            params: data,
        })
    },
    getDetailAccommodation: id => {
        return ApiOperation.request({
            url: ApiConstants.ACCOMMODATIONS + '/' + id,
            method: 'GET',
        })
    },
}
