<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AttendanceResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'attendance_status' => $this->attendance_status,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'attendance_title' => $this->attendance_title,
            'attendance_content' => $this->attendance_content
        ];
    }
}
