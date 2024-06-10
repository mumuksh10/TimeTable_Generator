<!DOCTYPE html>
<html>
<head>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
    </style>
</head>
<body>
    <h1>Weekly Timetable</h1>
    <table>
        <thead>
            <tr>
                <th>Classroom</th>
                <th>Teacher</th>
                <th>Subject</th>
                <th>Day</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($timetables as $timetable)
                <tr>
                    <td>{{ $timetable->classroom->name }}</td>
                    <td>{{ $timetable->teacher->name }}</td>
                    <td>{{ $timetable->subject->name }}</td>
                    <td>{{ $timetable->day }}</td>
                    <td>{{ $timetable->time }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
