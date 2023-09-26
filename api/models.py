from django.db import models

class Room(models.Model):
    name = models.CharField(max_length=50)
    precio = models.DecimalField(max_digits=10, decimal_places=2)

class Address(models.Model):
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    zip_code = models.CharField(max_length=10, blank=True)
    details = models.CharField(max_length=200, blank=True)

class AddGuest(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=20, blank=True)
    email = models.EmailField()
    birthday = models.DateField(blank=True, null=True)

class CheckInOut(models.Model):
    check_in_date = models.DateTimeField()
    check_out_date = models.DateTimeField()
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    taxes = models.DecimalField(max_digits=5, decimal_places=2)

class Reservation(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=20, null=True)
    email = models.EmailField()
    birthday = models.DateField(blank=True, null=True)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, null=True,blank=True)
    add_guest = models.ForeignKey(AddGuest, on_delete=models.CASCADE, null=True, blank=True)
    check_in_out = models.ForeignKey(CheckInOut, on_delete=models.CASCADE, null=True,blank=True)


