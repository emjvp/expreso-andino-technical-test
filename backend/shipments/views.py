from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Shipment
from .serializers import (
    ShipmentSerializer,
    TrackingEventSerializer
)


class ShipmentViewSet(viewsets.ModelViewSet):

    queryset = Shipment.objects.all().prefetch_related(
        "tracking_events"
    )

    serializer_class = ShipmentSerializer

    filterset_fields = [
        "status"
    ]

    search_fields = [
        "guide_number",
        "customer"
    ]


    @action(
        detail=True,
        methods=["get"]
    )
    def tracking(self, request, pk=None):

        shipment = self.get_object()

        events = shipment.tracking_events.all()

        serializer = TrackingEventSerializer(
            events,
            many=True
        )

        return Response(serializer.data)