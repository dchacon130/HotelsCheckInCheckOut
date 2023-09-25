from django.db import models

# Create your models here.
class Reservation(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100) 
    phone = models.CharField(max_length=100) 
    email = models.EmailField(max_length=200)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=100)
    details = models.CharField(max_length=100)
    add_guests = models.IntegerField()
    checkin = models.DateField(max_length=100)
    checkout = models.DateField(max_length=100)
    room_type = models.CharField(max_length=100)
    total = models.CharField(max_length=100)

    def __str__(self):
        return self.first_name +' '+ self.last_name
    
