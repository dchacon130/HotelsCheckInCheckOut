from django.contrib import admin
from .models import *

# Register your models here.
class RoomApiAdmin(admin.ModelAdmin):
    title = 'Room'
    list_display = ['name' , 'precio']
admin.site.register(Room, RoomApiAdmin)

class AddressApiAdmin(admin.ModelAdmin):
    title = 'Address'
    list_display = ['id', 'street' , 'city', 'zip_code', 'details']
admin.site.register(Address, AddressApiAdmin)

class AddGuestApiAdmin(admin.ModelAdmin):
    title = 'AddGuest'
    list_display = ['first_name' , 'last_name', 'phone_number', 'email', 'birthday']
admin.site.register(AddGuest, AddGuestApiAdmin)

class CheckInOutApiAdmin(admin.ModelAdmin):
    title = 'CheckInOut'
    list_display = ['id', 'check_in_date' , 'check_out_date', 'room_id', 'total', 'taxes']
admin.site.register(CheckInOut, CheckInOutApiAdmin)

class ReservationsApiAdmin(admin.ModelAdmin):
    title = 'Reservations'
    list_display = ['id', 'first_name' , 'last_name', 'phone_number', 'email', 'birthday', 'address', 'add_guest', 'check_in_out']
admin.site.register(Reservation, ReservationsApiAdmin)