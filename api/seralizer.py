from rest_framework import serializers
from .models import *

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        # fields = ('id', 'title', 'description')
        fields = '__all__'

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        # fields = ('id', 'title', 'description')
        fields = '__all__'

class AddGuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddGuest
        # fields = ('id', 'title', 'description')
        fields = '__all__'

class CheckInOutSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckInOut
        # fields = ('id', 'title', 'description')
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        # fields = ('id', 'title', 'description')
        fields = '__all__'