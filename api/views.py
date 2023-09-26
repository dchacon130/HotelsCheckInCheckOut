from rest_framework import viewsets
from .seralizer import *
from .models import *

# Create your views here.
class RoomView(viewsets.ModelViewSet):
    serializer_class = RoomSerializer
    queryset = Room.objects.all()

class AddressView(viewsets.ModelViewSet):
    serializer_class = AddressSerializer
    queryset = Address.objects.all()

class AddGuestView(viewsets.ModelViewSet):
    serializer_class = AddGuestSerializer
    queryset = AddGuest.objects.all()

class CheckInOutView(viewsets.ModelViewSet):
    serializer_class = CheckInOutSerializer
    queryset = CheckInOut.objects.all()

class ReservationView(viewsets.ModelViewSet):
    serializer_class = ReservationSerializer
    queryset = Reservation.objects.all()