/**
 * @typedef Base base model.
 * @property {string} id - the id of document.
 */

/**
 * @typedef UserDocument - user document model.
 * @property {string} fullName - fullName of user.
 * @property {string} email - email of user.
 * @property {string} phone - phone number of user.
 * @property {string} role - role of user. Accepted value: `admin`, `user`, `host`.
 * - admin: Highest role, can do anything.
 * - user: Normal user.
 * - host: Host user can create multiple hotel, resort data to allow `user` to book.
 * 
 * @global
 * @typedef {Base & UserDocument} User - the user model.
 */

/**
 * @typedef AmenityDocument - The amenities of accomodation.
 * @property {string} amenityName - the amenity name.
 * 
 * @global
 * @typedef {Base & AmenityDocument} Amenity - the amenities of accomodation.
 */

/**
 * @global
 * @typedef PolicyDocument - the policy of accomodation.
 * @property {string} checkIn - check in time.
 * @property {string} checkOut - check out time.
 * @property {string} [cancellationPolicy] - Details about the cancellation policy, if any.
 * @property {string} [additionalPolicy] - Details about the cancellation policy, if any.
 * 
 * @typedef {Base & PolicyDocument} Policy - the policy of accomodation.
 */

/**
 * @typedef RoomDocument - the room model.
 * @property {string} name - the name of room.
 * @property {number} capacity - the capacity of room.
 * @property {number} pricePerNight - the price of room.
 * @property {Amenity[]} amenities - the amenity ids of room.
 * @property {number} quantity - the quantity of room.
 * @property {number} [available] - the available quantity of room.
 * 
 * @global
 * @typedef {Base & RoomDocument} Room - the room model.
 */

/**
 * @typedef AccomodationDocument - accomodation document model.
 * @property {string} name - name of accomodation.
 * @property {string} city - city of accomodation.
 * @property {string} address - address of accomodation in details.
 * @property {number} [pricePerNight] - price of accomodation (Only `homestay` can have this property).
 * @property {Policy} policy - policy of accomodation.
 * @property {Amenity[]} amenities - amenities of accomodation.
 * @property {boolean} isAvailable - Indicates if the accommodation is available for booking.
 * @property {Room[]} rooms - rooms of accomodation (Only `hotel` can have this property).
 * @property {string} [lat] - latitude of accomodation.
 * @property {string} [lng] - longitude of accomodation.
 * @property {string[]} [images] - image URLs of accomodation.
 * @property {string} description - the host id of accomodation.
 * @property {string} noteAccomodation - the note of accomodation.
 * 
 * @global
 * @typedef {Base & AccomodationDocument} Accomodation - the accomodation model.
 */

/**
 * @typedef TicketDocument - ticket document model.
 * @property {string} userId - guest who booked the accomodation.
 * @property {string} accomodationId - accomodation booked.
 * @property {string} roomId - room booked.
 * @property {number} bookedQuantity - Number of booked room (Only when user book a hotel).
 * @property {string} fromDate - Date start of booking information (In YYYY-MM-DD format).
 * @property {string} toDate - Date end of booking information (In YYYY-MM-DD format).
 * @property {string} isPaid - Indicates if the booking is paid.
 * @property {string} isConfirmed - Indicates if the booking is confirmed by accommodation owner `host`.
 * @property {number} totalPrice - total price of booking.
 * 
 * @global
 * @typedef {Base & TicketDocument} Ticket - the ticket model.
 */

// TODO: Add Wallet, Payment document model.