-- Characters must start with 0 free points; the GM grants them later.
alter table public.characters alter column unspent_points set default 0;
