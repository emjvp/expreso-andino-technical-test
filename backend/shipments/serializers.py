from rest_framework import serializers

from .models import Shipment, TrackingEvent


class TrackingEventSerializer(serializers.ModelSerializer):

    class Meta:
        model = TrackingEvent
        fields = [
            "id",
            "status",
            "location",
            "created_at",
        ]


class ShipmentSerializer(serializers.ModelSerializer):

    tracking_events = TrackingEventSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Shipment
        fields = [
            "id",
            "guide_number",
            "customer",
            "origin",
            "destination",
            "status",
            "created_at",
            "tracking_events",
        ]