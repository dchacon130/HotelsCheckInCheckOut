from django.contrib import admin
from .models import Reservation

# Register your models here.
class MyApiAdmin(admin.ModelAdmin):
    title = 'Reservations'
    list_display = ['first_name', 'last_name', 'email', 'checkin', 'checkout', 'room_type', 'total']

admin.site.register(Reservation, MyApiAdmin)