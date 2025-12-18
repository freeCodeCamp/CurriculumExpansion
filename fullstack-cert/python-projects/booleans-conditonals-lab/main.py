def can_commute(distance_km, is_raining, has_bike, has_car, has_ride_share_app):
    if not distance_km:
        return False

    if distance_km <= 2:
        return not is_raining

    elif distance_km <= 10:
        return has_bike and not is_raining

    else:
        return has_car or has_ride_share_app

print(can_commute(1, False, False, False, False))
print(can_commute(3, False, True, False, False))
print(can_commute(3, True, True, False, False))
print(can_commute(12, False, False, True, False))
print(can_commute(12, False, False, False, True))
print(can_commute(0, False, False, False, True))
